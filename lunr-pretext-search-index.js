var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "frontmatter-3",
  "level": "1",
  "url": "frontmatter-3.html",
  "type": "Preface",
  "number": "",
  "title": "Authors",
  "body": " Authors    B  Department of Mathematics  Duke University     Hellen Colman  Math Department  Wright College  hcolman@ccc.edu    C  School of Mathematics  Georgia Institute of Technology     "
},
{
  "id": "sec-name",
  "level": "1",
  "url": "sec-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "First section",
  "body": " First section  Text of section. For example   Create a Set  Create a variable. Do not use reserved word or white space for a variable name. After the variable, we use an equal sign to assign (store) value. Define a set by listing the contents separated by commas in between a pair of curly braces.     Intersection  Intersection of sets     "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
