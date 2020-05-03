import unittest
from absl import flags

from .main import generate_greeting


class MainTest(unittest.TestCase):

    def test_main(self):
        flags.FLAGS(['test',
            '--a', '2',
            '--b', '3'
        ])

        self.assertEqual('Hello from Python! 2+3=5', generate_greeting())
