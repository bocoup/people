#!/bin/bash

git clone --depth 1 git@github.com:bocoup/deployment-workflow.git temp
cp -iR temp/deploy/ ../deploy
cp -i temp/Vagrantfile ../Vagrantfile
cp -i temp/ansible.cfg ../ansible.cfg
cp -i temp/LICENSE-MIT ../deploy/LICENSE-MIT
rm -rf temp
echo 'Checkout https://deployment-workflow.bocoup.com/ to finish your setup';

exit 0
