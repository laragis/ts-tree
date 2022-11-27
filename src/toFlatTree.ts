// @ts-nocheck
import {flatten} from 'flattree'
import {nanoid} from 'nanoid'
import {defaultTo} from 'lodash'
import generateIdsForTree from "./generateIdsForTree";

// @param {object|array} nodes The tree nodes.
// @param {object} [options] The options object.
// @param {boolean} [options.openAllNodes] True to open all nodes. Defaults to false.
// @param {array} [options.openNodes] An array that contains the ids of open nodes.
// @return {array}

const toFlatTree = (tree, options = {}) => {
  const idFn = options.idFn ? options.idFn : nanoid

  return flatten(generateIdsForTree(tree, {idFn}), {
    openAllNodes: true,
    ...options
  }).map(({parent, state, children, id, ...rest}) => {
    return {
      ...rest,
      parent_id: parent.id,
      id: defaultTo(id, nanoid())
    }
  })
}

export default toFlatTree