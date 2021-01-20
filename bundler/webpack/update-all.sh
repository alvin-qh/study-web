#! /usr/bin/env bash

# use "npm npm-check-updates" to install "ncu -u" to check package updates

getopts "u:d:i:" opts;

update() {
  for dir in `ls -d */`
    do
      cd "$dir";
      if [[ -f "package.json" ]]; then
        ncu -u;
        if [[ "${opts[0]}" = "u" ]] && [[ $OPTARG = "yes" ]]; then
          npm install;
        fi
        if [[ "${opts[0]}" = "d" ]]; then
          npm install --save-dev $OPTARG;
        fi
        if [[ "${opts[0]}" = "i" ]]; then
          npm install --save $OPTARG;
        fi
      else
        update;
      fi
      cd ..;
    done
}

update;
