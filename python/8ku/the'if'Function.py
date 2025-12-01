# https://www.codewars.com/kata/54147087d5c2ebe4f1000805/train/python

from collections.abc import Callable

def _if(bool, func1: Callable, func2: Callable):
    if bool:          # use truthiness directly
        return func1()
    else:
        return func2()