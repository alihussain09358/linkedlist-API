/**
 * ListController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const List = require("../models/List");

class Node {
    constructor(data,next=null){
        this.data = data,
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head=null;
    }


insertFirst(data){
    const node = new Node(data,  this.head);
    this.head = node;
}
}
const nodeOne = new Node(5);
const list = new LinkedList();
list.head = nodeOne;
list.insertFirst(10)

module.exports = {
    
  create(req,res){
    List.create({
data:req.params('data'),
next:req.params('next')
    })
    .then(list => {
        return res.ok(list);
    }).catch(err => res.serverError(err));
  },

  search(req,res){
      List.search().then(list =>{res.ok(list,console.log("hey"))}).catch(err => res.notFound(err));
  },

  update(req,res){
      let attributes ={};
      if(req.param('data')){
          attributes.name=req.param('data')
      }
      if(req.param('next')){
        attributes.name=req.param('next')
    }
    List.update({
        id:req.params.id
    }).then(list =>{ res.ok(list[0])}).catch(err => res.serverError(err))

  },

  delete(req,res){
    List.destroy({
        id: req.params.id
    })
    .then(list => {
        return res.ok(list);
    }).catch(err => res.serverError(err));
  },

  reverse(req,res){


  },

  length(req,res){


  }

};

