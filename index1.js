// let mongoose = require('mongoose');
//
// mongoose.connect('mongodb://127.0.0.1/mongodb', {useNewUrlParser: true}, (err) => {
//     if (err) {
//         throw err
//     }
//     console.log(`Successfully connected`)
//
// });
//
// let userSchema = mongoose.Schema({
//     name: {
//         firstName: String,
//         lastName: String
//     },
//     created: Date
// });
//
// let authorSchema = mongoose.Schema({
//     _id: mongoose.Schema.Types.ObjectId,
//     name: {
//         firstName: String,
//         lastName: String
//     },
//     biography: String,
//     twitter: String,
//     facebook: String,
//     linkedin: String,
//     profilePicture: Buffer,
//     created: {
//         type: Date,
//         default: Date.now
//     }
// });
//
// let bookSchema = mongoose.Schema({
//     _id: mongoose.Schema.Types.ObjectId,
//     title: String,
//     summary: String,
//     isbn: String,
//     thumbnail: Buffer,
//     author: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Author'
//     },
//     ratings: [
//         {
//             summary: String,
//             detail: String,
//             numberOfStart: Number,
//             created: {
//                 type: Date,
//                 default: Date.now
//             }
//         },
//     ],
//
// });
//
// let Author = mongoose.model('Author', authorSchema);
// let Book = mongoose.model('Book', bookSchema);
//
// let jamieAuthor = new Author ({
//     _id: new mongoose.Types.ObjectId(),
//         name: {
//         firstName: 'Jamie',
//             lastName: 'Munro'
//     },
//     biography: 'Jamie is the author of ASP.NET MVC 5 with Bootstrap and Knockout.js.',
//         twitter: 'https://twitter.com/endyourif',
//         facebook: 'https://www.facebook.com/End-Your-If-194251957252562/'
// });
//
// jamieAuthor.save(function(err) {
//     if (err) throw err;
//
//     console.log('Author successfully saved.');
//
//     let mvcBook = new Book ({
//         _id: new mongoose.Types.ObjectId(),
//             title: 'ASP.NET MVC 5 with Bootstrap and Knockout.js',
//             author: jamieAuthor._id,
//             ratings:[{
//             summary: 'Great read'
//         }]
//     });
//
//     mvcBook.save(function(err) {
//         if (err) throw err;
//
//         console.log('Book successfully saved.');
//     });
//
//     let knockoutBook = new Book ({
//         _id: new mongoose.Types.ObjectId(),
//             title: 'Knockout.js: Building Dynamic Client-Side Web Applications',
//             author: jamieAuthor._id
//     });
//
//     knockoutBook.save(function(err) {
//         if (err) throw err;
//
//         console.log('Book successfully saved.');
//     });
// });
//
// Book.find({
//     title: /mvc/i
// }).exec(function(err, books) {
//     if (err) throw err;
//
//     // console.log(`${books} it is our books`);
// });
// Author.findOne({_id:'5cb5b19ca0e49a115007208a'}, function(err, author) {
//     if (err) throw err;
//     author.linkedin = 'https://www.linkedin.com/in/jamie-munro-8064ba1a/';
//
//     author.save(function(err) {
//         if (err) throw err;
//
//         console.log('Author updated successfully');
//     });
//     console.log(`${author} there is our author`);
// });
//
// Author.findOneAndUpdate({_id:'5cb5b9075c6dd22c3c9fdbd7'}, {linkedid:'linkedin.com/qqqqqqqqqqqqqqq'}, (err)=>{
//    if(err) throw err;
//    console.log(`SUCCESSFULLY UPDATED`);
// });
