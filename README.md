docker run --volume=${PWD}:/app --workdir=/app --interactive --tty --publish=3000:3000 --user=node node:10-alpine sh
yarn start 
