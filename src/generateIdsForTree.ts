// @ts-nocheck
import {nanoid} from 'nanoid'
import {defaultTo, isArray, map} from "lodash";

const generateIdsForTree = (tree, options = {}) => {
  const {idKey = 'id', childrenKey = 'children', idFn = nanoid} = options || {}

  const parseItem = (item) => ({
    ...item,
    ...(isArray(item[childrenKey]) && ({
      [childrenKey]: item[childrenKey].map(c => generateIdsForTree(c)),
    })),
    [idKey]: defaultTo(item[idKey], idFn(item))
  })

  return isArray(tree) ? map(tree, (v) => parseItem(v)) : parseItem(tree)
}

export default generateIdsForTree