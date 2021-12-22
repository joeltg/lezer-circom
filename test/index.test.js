import test from "ava"

import * as fs from "node:fs"
import { resolve } from "node:path"

import { parser } from "../index.js"

function traverse(input, t) {
	const tree = parser.parse(input)
	const cursor = tree.cursor()

	do {
		// console.log(cursor.name)
		if (cursor.name === "ArrayIndex") {
			// console.log(cursor.node)
			const child = cursor.node.getChild("NumericExpression")
			console.log("ArrayIndex child", child && child.name)
		} else if (cursor.name === "Addition") {
			const children = cursor.node.getChildren("NumericExpression")
			console.log(
				"Addition children",
				children.map((child) => child.name)
			)
		} else if (cursor.node.type.isError) {
			const { from, to } = cursor
			const value = JSON.stringify(input.slice(from, to))
			t.fail(`error from ${from} to ${to}: ${value}`)
		}
	} while (cursor.next())

	t.pass()
}

test("sample.circom", (t) => {
	const input = fs.readFileSync(resolve("test", "sample.circom"), "utf-8")
	traverse(input, t)
})
