/**
 * External dependencies
 */
import { get } from 'lodash';

function getSetupState( state ) {
	return state.extensions.wpJobManager.setup;
}

/**
 * Returns true if we are creating pages for the specified site ID, false otherwise.
 *
 * @param  {Object}  state Global state tree
 * @param  {Number}  siteId Site ID
 * @return {Boolean} Whether pages are being created
 */
export function isCreatingPages( state, siteId ) {
	return get( getSetupState( state ), [ 'creating', siteId ], false );
}

/**
 * Returns true if we should advance to the next step of the wizard, false otherwise.
 *
 * @param  {Object}  state Global state tree
 * @param  {Number}  siteId Site ID
 * @return {Boolean} Whether to advance to the next step of the wizard
 */
export function shouldGoToNextStep( state, siteId ) {
	return get( getSetupState( state ), [ 'nextStep', siteId ], false );
}
