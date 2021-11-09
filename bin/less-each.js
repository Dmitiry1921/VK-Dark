#! /usr/bin/env node

// Run `node  less-each.js  ‹dir1›  ‹dir2›` to activate.
// @param `‹dir1›` - the relative directory of files to compile
// @param `‹dir2›` - the relative directory for output files to go
// Original code here: https://github.com/chharvey/lessc-each

const fs = require('fs');
const path = require('path');
const less = require('less');

const dir_start = process.cwd();                                       		// directory from which node was run
const dir_in = path.normalize(process.cwd() + '/' + process.argv[2]) 	// directory where less src files are
const dir_out = path.normalize(process.cwd() + '/' + process.argv[3]) 	// directory to put output css

try {
	process.chdir(dir_in)
	try {
		process.chdir(dir_out)
		theWork()
	} catch (err) {
		console.error('out dir: ' + err)
		console.log('making directory...')
		fs.mkdir(dir_out, theWork)
	}
} catch (err) {
	console.error('in dir: ' + err)
	console.log('please try again')
}

function theWork() {
	process.chdir(dir_in)

	fs.readdir(dir_in, (err, files) => {
		if (err) return console.error('There was an error: ', err)

		const less_files = files.filter((el) => {
			const ext = path.parse(el).ext
			const name = path.parse(el).name
			return (ext === '.less') && (name.slice(0,2) !== '__')
		})

		less_files.forEach((el) => {
			let path_less = path.normalize(dir_in  + '/' + el)
			let path_css  = path.normalize(dir_out + '/' + el.slice(0, el.length-5) + '.css')

			fs.readFile(path_less, 'utf8',  (err, data) => {
				if (err) return console.error('There was an error: ', err)
				less.render(data, (error, output) => {
					if (error) {
						console.error('FATAL! ' + path_less + ' does NOT compile due to:' + '\n    ' + error.message)
						console.log('Continuing to next file...')
					} else {
						fs.writeFile(path_css, output.css,  (err, data) => {
							if (err) return console.error('There was an error: ', err)
							path_less = path_less.split(dir_start + '/')[1] // removes the first dir_start from string
							path_css = path_css.split(dir_start + '/')[1]   // removes the first dir_start from string
							console.log('Success! ' + path_less + ' > ' + path_css)
						})
					}
				})
			})
		})
	})
}
