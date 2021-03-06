/**
 * Returns the poster upload progress.
 *
 *
 * @format
 * @param {Object}  state  Global state tree
 * @return {Number}  Poster upload progress percentage.
 */

export default function getPosterUploadProgress( state ) {
	return state.ui.editor.videoEditor.uploadProgress;
}
