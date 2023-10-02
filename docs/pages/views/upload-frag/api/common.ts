import request from '../utils/request'

/**
 * 文件完整上传记录
 * @param data
 */
export function selFileFullUploadList(data) {
  return request({
    url: '/common/upload/file/full/list',
    method: 'POST',
    data,
  })
}

/**
 * 文件完整上传
 * @param file
 */
export function fileFullUpload(file: File) {
  return request({
    url: '/common/upload/file/full',
    method: 'POST',
    data: file,
  })
}

/**
 * 文件分片上传记录
 * @param data
 */
export function selFileChunkUploadList(data) {
  return request({
    url: '/common/upload/file/chunk/list',
    method: 'POST',
    data,
  })
}

/**
 * 文件分片上传前置检查
 * @param data
 */
export function fileChunkUploadCheck(data) {
  return request({
    url: '/common/upload/file/chunk/check',
    method: 'POST',
    data,
  })
}

/**
 * 文件分片上传
 * @param data
 */
export function fileChunkUpload({ fileMd5, orderNum, file }: { fileMd5: string; orderNum: number; file: Blob }) {
  return request({
    url: `/common/upload/file/chunk/${fileMd5}/${orderNum}`,
    method: 'POST',
    data: file,
  })
}

/**
 * 文件分片合并
 * @param data
 */
export function fileChunkMerge(data) {
  return request({
    url: '/common/upload/file/chunk/merge',
    method: 'POST',
    data,
  })
}
