rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin https://github.com/oyjt/vite-ui.git &&
git push -f -u origin master &&
cd -
echo https://github.com/oyjt/vite-ui.git