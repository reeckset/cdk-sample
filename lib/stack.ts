import * as s3 from '@aws-cdk/aws-s3'
import * as cdk from '@aws-cdk/core';
import { LambdaExecuter } from './lambda-executer';

export class CdkDemoProjectStack extends cdk.Stack {

  constructor(scope: cdk.App, id: string, props: {}) {
    super(scope, id, props);

    const lambdaExecuterQueue = new LambdaExecuter(this, "lambdaExecuter").queue;

  }
}

module.exports = { CdkDemoProjectStack }
