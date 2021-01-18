#! /usr/bin/env bash

# use "npm npm-check-updates" to install "ncu -u" to check package updates

getopts "u:" opts;

update() {
  for dir in `ls -d */`
    do
      cd "$dir";
      if [[ -f "package.json" ]]; then
        ncu -u;
        if [[ "${opts[0]}" = "u" ]] && [[ $OPTARG = "yes" ]]; then
          npm install;
        fi
      else
        update;
      fi
      cd ..;
    done
}

update;
