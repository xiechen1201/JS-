const { existsSync, mkdirSync, readdirSync, unlinkSync, writeFileSync } = require("fs");
const { resolve } = require("path");

const reg_template = /\<template\>(.*?)\<\/template\>/;
const reg_script = /\<script\>(.*?)\<\/script\>/;
const reg_style = /\<style\>(.*?)\<\/style\>/;

function vueLoader(source) {
  const _str = source.replace(/[\r\n]/g, "");
  const template = _str.match(reg_template)[1];
  const script = _str.match(reg_script)[1];
  const style = _str.match(reg_style)[1];
  const cssFileName = `_temp/css/_${new Date().getTime()}.css`;

  wirteFile(cssFileName, style);

  const vueScript = script.replace(/\{(.*?)/, (node, key) => {
    return `
      { template: '${template}',
    `;
  });

  return `
    import "../${cssFileName}";
    ${vueScript}
  `;
}

function wirteFile(cssFilename, style) {
  if (!existsSync(formatPath("../../__temp"))) {
    mkdirSync(formatPath("../../_temp"));
    mkdirSync(formatPath("../../_temp/css/"));
  }

  const files = readdirSync(formatPath("../../__temp/css/"));
  files &&
    files.forEach((file) => {
      unlinkSync(formatPath("__temp/css/" + file));
    });

  writeFileSync(formatPath(`../../__temp/css/${cssFilename}`), style);
}

function formatPath(path) {
  return resolve(__dirname, path);
}

module.exports = vueLoader;
