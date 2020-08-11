let names = "Dean Winchester, Sam Winchester,";

names = names.replace(/,\s*$/, '');
console.log(names);

const paragraph = "An apple a day, keeps the doctor away";

//db.getCollection('example').find({display_name: /dean/i})
paragraph.replace(/doctor/i, 'plumber'); // not working
console.log(paragraph);