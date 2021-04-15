#!/usr/bin/env node
const cdk = require('@aws-cdk/core');
const { Experiment1Stack } = require('../lib/stack');

const app = new cdk.App();
new Experiment1Stack(app, 'Experiment1Stack', {});
