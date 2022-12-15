#!/usr/bin/env bash

echo "Cleaning all the things";
watchman watch-del-all;
rm -rf node_modules;
rm -rf $TMPDIR/react-*;
rm -rf $TMPDIR/npm-*;
cd ios;
pod cache clean --all;
rm -rf Pods;
rm -rf Podfile.lock;
rm -rf build;
npm cache clean --force;
cd ../android;
rm -rf build;
cd ..;
rm -rf ~/Library/Developer/Xcode/DerivedData
