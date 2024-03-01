from flask import Flask, render_template, request, redirect, url_for, flash, abort
import sqlite3

app = Flask(__name__)
app.config['SECRET_KEY'] = 'super secret key shhhh'

app_data = {
    "name": "Peter's Starter Template for a Flask Web App",
    "description": "A basic Flask app using bootstrap for layout",
    "author": "Peter Simeth",
    "html_title": "Student Database",
    "project_name": "Starter Template",
    "keywords": "flask, webapp, template, basic",
}

def db_connect():
    dbcnct = sqlite3.connect('student.db')
    dbcnct.row_factory = sqlite3.Row
    return dbcnct

@app.route("/")
def interface():
    db = db_connect()
    students = db.execute('SELECT * FROM students').fetchall()
    db.close()
    return render_template("interface.html", students=students)

@app.route("/addStudent", methods=('GET', 'POST'))
def addStudent():
    db = db_connect()
    students = db.execute('SELECT * FROM students').fetchall()
    db.close()

    if request.method == 'POST':
        student_name = request.form['name']
        id = request.form['id']
        score = request.form['score']

        if not student_name:
            flash('Name is required!')
        elif not id:
            flash('ID is required!')
        else:
            db = db_connect()
            db.execute('INSERT INTO students (id, student_name, points) VALUES (?, ?, ?)',
                         (id, student_name, score))
            db.commit()
            db.close()
            return redirect('/')

    return render_template("addStudent.html", students=students)

@app.route('/<int:id>/editStudent/', methods=('GET', 'POST'))
def editStudent(id):
    db = db_connect()
    students = db.execute('SELECT * FROM students').fetchall()

    profile = db.execute('SELECT * FROM students WHERE id = ?', (id,)).fetchone()
    db.close()

    if profile is None:
        abort(404)

    if request.method == 'POST':
        student_name = request.form['name']
        id = request.form['id']
        score = request.form['score']

        if not student_name:
            flash('Name is required!')
        elif not id:
            flash('ID is required!')
        else:
            db = db_connect()
            db.execute('UPDATE students SET student_name = ?, points = ? WHERE id = ?',
                         (student_name, score, id))
            db.commit()
            db.close()
            return redirect('/')

    return render_template("editStudent.html", students=students, profile=profile)

@app.route('/<int:id>/deleteStudent/', methods=('POST',))
def deleteStudent(id):
    db = db_connect()
    db.execute('DELETE FROM students WHERE id = ?', (id,))
    db.commit()
    db.close()
    return redirect('/')

@app.route('/getStudent', methods=('POST',))
def getStudent():
    global students
    search = request.form['search']
    if search.isdigit():
        search = int(search)
    if type(search) is int:
        db = db_connect()
        students = db.execute('SELECT * FROM students WHERE id = ?',
                        (search,)).fetchone()
        db.close()
        if students is None:
            flash('ID not in database')
        return redirect('/')
    else:
        db = db_connect()
        students = db.execute('SELECT * FROM students WHERE student_name = ?',
                        (search,)).fetchone()
        db.close()
        print(students)
        if students is None:
            flash('Name not in database')
        return redirect('/')

if __name__ == "__main__":
    app.run()
