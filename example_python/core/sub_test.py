import unittest

from example_python.core.sub import sub

class SubTest(unittest.TestCase):

    def test_sub_1_1(self):
        self.assertEqual(0, sub(1, 1))
