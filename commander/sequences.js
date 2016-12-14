"use strict";

const packageJson = require("../package.json");

module.exports = {
  s3: {
    message: "You are now interacting with the AWS S3 service.",
    commands: {
      LOCAL_TO_STAGE: {
        warning: "You are about to push the local build folder up to S3's stage site.",
        commands: [
          "aws s3 sync --delete " + packageJson.buildPath + " s3://" + packageJson.s3.stage.bucket, //syncs our build folder to the stage repo on google storage
          "open " + packageJson.s3.stage.cloudfront
        ]
      },
      STAGE_TO_PRODUCTION: {
        warning: "This will overwrite the CURRENT PRODUCTION code. > npm run s3-rollback > will reverse any damage.",
        commands: [ //production to backup as well
          "aws s3 sync --delete s3://" + packageJson.s3.production.bucket + " s3://" + packageJson.s3.rollback.bucket,
          "aws s3 sync --delete s3://" + packageJson.s3.stage.bucket + " s3://" + packageJson.s3.production.bucket, //syncs our build folder to the stage repo on google storage
          "open " + packageJson.s3.production.cloudfront
        ]
      },
      ROLLBACK_PRODUCTION: {
        warning: "This will swap our production bucket for our backup bucket. \nBe absolute sure that the backup is stable before rolling back.",
        commands: [
          "aws s3 sync --delete s3://" + packageJson.s3.rollback.bucket + " s3://" + packageJson.s3.production.bucket, //syncs our build folder to the stage repo on google storage
          "open " + packageJson.s3.production.cloudfront
        ]
      }
    }
  }
};
