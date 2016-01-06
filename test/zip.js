import test from 'ava'
import {zip} from '../'
import {
  isFrozenToArray,
  oneTwoThree,
  oneTwoThreeFour,
  positiveIntegers,
  takeThree,
  threeTwoOne
} from './_tools'

test('zip', t => {
  const processIterable = isFrozenToArray(t)
  t.same(
    processIterable(zip(oneTwoThree)(threeTwoOne)).map(processIterable),
    [[1, 3], [2, 2], [3, 1]]
  )
  t.same(
    processIterable(zip(oneTwoThreeFour)(threeTwoOne)).map(processIterable),
    [[1, 3], [2, 2], [3, 1]]
  )
  t.same(
    processIterable(zip(threeTwoOne)(positiveIntegers)).map(processIterable),
    [[3, 1], [2, 2], [1, 3]]
  )
  t.same(
    processIterable(takeThree(zip(positiveIntegers, positiveIntegers))).map(processIterable),
    [[1, 1], [2, 2], [3, 3]]
  )
})
