const listContacts = require("./contacts");
// const yargs = require('yargs')
const { Command } = require('commander');

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "read":
      const allContacts = await listContacts.listContacts();
      return console.log(allContacts);
    case "getById":
      const oneContact = await listContacts.getContactById(id);
      return console.log(oneContact);
    case "add":
      const newContact = await listContacts.addContact({ name, email, phone });
      return console.log(newContact);
    case "updateById":
      const updateContact = await listContacts.updateById(id, {
        name,
        email,
        phone,
      });
      return console.log(updateContact);
    case "deleteById":
      const deleteContact = await listContacts.removeContact(id);
      return console.log(deleteContact);
      default:
        return console.log('Unknow action')
  }
};

const program = new Command();

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse();

const argv = program.opts();
invokeAction(argv)





























// invokeAction({ action: "read" });

// invokeAction({ action: "getById", id: "AeHIrLTr6JkxGE6SN-0Rw" });

// invokeAction({
//   action: "add",
//   name: "Ihor Voloshyn",
//   email: "Voloshun@mail.com",
//   phone: "9379992",
// });

//  invokeAction({
//   action: "updateById",
//   id: 'TAw-NifblxVJWFKXBkUxu',
//   name: "alisa Voloshyn",
//   email: "hun@mail.com",
//   phone: "93992",
// });

// invokeAction({
//   action: "deleteById",
//   id: "TAw-NifblxVJWFKXBkUxu",
// });
