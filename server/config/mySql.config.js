const mysql = require('mysql')


const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bbydi'
})

const mySqlConnection = () => {

    con.connect((error) => {
        if(error) return console.log('error connecting to the database', error);
        console.log('Database connected successfully')
    })

}

const blogFinder = (blogTitle) => {
    const query = `SELECT 'id' FROM blog WHERE title=${blogTitle}`;
    con.connect({
        
    })
}

module.exports = mySqlConnection