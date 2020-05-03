from example_python.core.math import sum

from absl import app, flags

flags.DEFINE_integer('a', 1, 'first number')
flags.DEFINE_integer('b', 1, 'second number')

FLAGS = flags.FLAGS

def generate_greeting():
    return f'Hello from Python! {FLAGS.a}+{FLAGS.b}={sum(FLAGS.a, FLAGS.b)}'

def main(argv):
    print(generate_greeting())

if __name__ == '__main__':
    app.run(main)
