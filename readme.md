# cli-guid
node command line tool for generating a number of guids in the command line.

### Usage
`npm install -g cli-guid`

`$ guid [number]`

#### Note
* Uses [`uuid`](https://www.npmjs.com/package/uuid) to generate the guid
* Number is optional. If not supplied 1 guid will be printed
* Lenient parsing - any argument that can't be parsed will default to 1