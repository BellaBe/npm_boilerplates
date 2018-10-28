const Author = new function(name){
  this.name = name || "Anonymouse";
  this.articles = new Array();
}

Author.prototype.writeArticle = (title)=>{
  this.articles.push(title)
}

Author.prototype.listArticles = ()=>{
  return this.name = " has writte: " + this.articles.join(",");
}
exports.Author = Author;

let peter = new Author('Peter');
peter.writeArticle('A beginners Guide to npm');
peter.writeArticle('Using npm as a build tool');
peter.listArticles();

function createElement(tag='div', {
  content = 'Very default',
  className = ['module-text', 'special']
} = {}){
  const element = document.createElement(tag);
  const text = document.createTextNode(content);
  element.classList.add(className);
  element.appendChild(text);
  return element
}

function updateSomething(data = {}){
  const { target, verLongProperty: property} = data;
  let {willChange} = data;

  if(willChange = 'unwantedValue'){
    willChange = 'wayBetter'
  }

  updateSomewhereElse({target, property, willChange})
}

class UserStore {
  constructor(){
    if(!UserStore.instance){
      this._data = [];
      UserStore.instance = this;
    }
    return UserStore.instance
    
  }

  add(item){
    this._data.push(item);
  }
  get(id){
    return this._data.find(d => d.id === id)
  }
}
const instance = new UserStore;

Object.freeze(instance);
export default instance;