from livereload import Server, shell
import sass
import os

# define paths
cwd = os.getcwd()
scss_dir = os.path.join(cwd + "/styles/sass/")
css_dir = os.path.join(cwd + "/styles/css/")
scss = os.path.join(scss_dir + 'style.scss')
css = os.path.join(css_dir + 'style.css')


def compile_sass():
    # creates style sheets if they don't exhist already
    if not os.path.exists(scss):
        with open(scss, 'a'): pass
    if not os.path.exists(css):
        with open(css, 'a'): pass

    # attempts to compile sass, if not returns an error
    try:
        sass.compile(dirname=(scss_dir, css_dir))
        print('compiled sass')
    except sass.CompileError:
        print('compile error')
        pass


def server():
    # watches for changes in sass
    # Creates server at port 8080
    server = Server()
    server.watch(scss, compile_sass)
    server.serve(port=8081, host='localhost')


server()
