const cypress = require("cypress");
const marge = require("mochawesome-report-generator");
const { merge } = require("mochawesome-merge");
const fs = require("fs-extra");
const argv = require("minimist")(process.argv.slice(2));

const cypressReportFolder = "cypress/reports";
const cypressTemporaryReportFolder = `${cypressReportFolder}/temporary`;
const tmpReportFolderPath = `${process.cwd()}/${cypressTemporaryReportFolder}`;

function deleteReport() {
    return fs.remove(tmpReportFolderPath).catch(err => console.log(err));
}

const mergeOptions = {
    files: [`./${cypressTemporaryReportFolder}/*.json`]
};

const generatorOptions = {
    reportFilename: `${new Date().toJSON()}`,
    reportDir: `./${cypressReportFolder}`
};

async function generateReport() {
    const report = await merge(mergeOptions);
    await marge.create(report, generatorOptions);
}

function cypressSettings(browser, headless) {
    if (browser === undefined) {
        argv.browser = "chrome";
    }
    if (headless === undefined) {
        argv.headless = "false";
    }
    const isHeadless = (argv.headless = argv.headless === "true");

    return {
        browser: argv.browser,
        headless: isHeadless,
        quiet: false,
        // uncomment below if you only want to run tests from one of the files
        // spec: "/cypress/tests/home"
    };
}

async function runTests(argv) {
    await deleteReport();
    try {
        const results = await cypress.run(cypressSettings(argv.browser, argv.headless));
        await generateReport();
        if (results.totalFailed) {
            process.exit(1);
        }
        process.exit(0);
    } catch (error) {
        await generateReport();
        console.error(error);
        process.exit(1);
    }
}

runTests(argv);
