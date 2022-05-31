import { styleTags, tags } from "@lezer/highlight"

export const circomHighlighting = styleTags({
	"include pragma circom main": tags.keyword,
	"log assert": tags.operatorKeyword,
	"input output public parallel": tags.modifier,
	"if else for while do return": tags.controlKeyword,
	"signal component var template function": tags.definitionKeyword,
	LineComment: tags.lineComment,
	BlockComment: tags.blockComment,
	CompilerVersion: tags.literal,
	Number: tags.number,
	String: tags.string,

	// Syntax (none of these are style by default)
	"OpenBrace CloseBrace": tags.brace,
	"OpenBracket CloseBracket": tags.bracket,
	"OpenParen CloseParen": tags.paren,
	'";"': tags.punctuation,

	// Operators (none of these are style by default)
	'"&" "|" "~" "^" ">>" "<<"': tags.bitwiseOperator,
	'"+" "-" "*" "**" "/" "\\\\" "%"': tags.arithmeticOperator,
	'"&&" "||" "!" "<" "<=" ">" ">=" "==" "!=="': tags.logicOperator,
	'"===" "<==" "==>"': tags.compareOperator,

	"TemplateDeclaration/Identifier FunctionDeclaration/Identifier Call/Identifier":
		tags.function(tags.variableName),

	"InputSignalDeclaration/Identifier OutputSignalDeclaration/Identifier IntermediateSignalDeclaration/Identifier":
		tags.definition(tags.propertyName),
	"PublicSignalsList/Identifier": tags.definition(tags.propertyName),
	"Value/Signal/Identifier": tags.propertyName,

	"ComponentDeclaration/Identifier VariableDeclaration/Identifier Assignment/Identifier Value/Identifier":
		tags.variableName,
})
