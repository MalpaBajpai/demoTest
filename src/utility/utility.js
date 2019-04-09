import fs from 'fs';
import path from 'path';

export const readfile = async (fileName) => {
  try{
    return fs.readFileSync(path.join(__dirname, '../', '../', 'resources', fileName), 'utf8');
  } catch (e) { throw e }
}

export const writeFile  = async (fileName, updatedData) => {
const filePath = path.join(__dirname, '../', '../', 'resources', fileName);

 fs.writeFile(
   filePath,
   updatedData,
   (err) => {
     if (err) throw err;
     else console.log(`new file has been created... ${filePath}`);
   }
 );
}