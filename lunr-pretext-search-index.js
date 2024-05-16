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
  "id": "authors",
  "level": "1",
  "url": "authors.html",
  "type": "Preface",
  "number": "",
  "title": "Authors",
  "body": " Authors   Zunaid Ahmed  Computer Engineering  Truman College  zunaid.ahmed@hotmail.com    Hellen Colman  Math Department  Wright College  hcolman@ccc.edu    Samuel Lubliner  Computer Science  Wright College  sage.oer@gmail.com   "
},
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " We would like to acknowledge the following reviewers for their helpful comments and suggestions.   A B, University of Sheffield    C D, University of Wisconsin     We would like to acknowledge the following proof-readers for their helpful comments and suggestions.   A B, University of Sheffield    C D, University of Wisconsin     We would also like to  "
},
{
  "id": "Cpq",
  "level": "1",
  "url": "frontmatter-5.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " This book was written by undergraduate students at Wright College who were enrolled in my Math 299 class, Writing in the Sciences.  For many years, I have been teaching Discrete Math using the open source mathematical software SageMath. Despite the fabulous capabilities of this software, students were often frustrated by the lack of specific documentation geared towards beginning undergrad students in Discrete Math.  This book was born out of this frustration and the desire to make our own contribution to the Open Education movement from which we have benefitted greatly. In the context of Open Pedagogy, my students and I ventured into a challenging learning experience based on the principles of freedom and responsibility. Each week students wrote a chapter of this book. They found the topics and found their voice. We critically analyzed their writing and they edited, and edited again and again. They wrote code, tested it and polished it. In the process we all learned so much about Sage and we found some bugs in the software that are now in the process of being fixed thanks to its very active community of developers.  The result is the book that we dreamed to have had when we first attempt Discrete Math with Sage.  Our book is intended to provide concise and complete instructions of how to use different Sage functions to solve problems in Discrete Math. Our goal is to streamline the learning process helping students focus more on mathematics and reducing the friction of learning how to code. Our textbook is interactive and designed for all math students, regardless of programming experience. Rooted in the open education philosophy, our textbook is, and always will be, free for all.  I am very proud of the work of my students and hope that this book will serve as inspiration for other students to take ownership of a commons-based education. Towards a future where higher education is equally accessible to all.     Hellen Colman  Chicago, May 2024   "
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
