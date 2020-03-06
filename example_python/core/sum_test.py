import unittest

from example_python.core.sum import sum

class SumTest(unittest.TestCase):

    def test_sum_1_1(self):
        self.assertEqual(2, sum(1, 1))
