/** @format */
/**
 * External dependencies
 */
import React from 'react';
import { localize } from 'i18n-calypso';
import Gridicon from 'gridicons';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import Button from 'components/button';

const ReturnPreviousPage = ( { onBackClick, translate } ) => {
	return (
		<Button className="return-previous-page" borderless compact onClick={ onBackClick }>
			<Gridicon icon="arrow-left" />
			<span className="return-previous-page__label">
				{ translate( 'Back' ) }
			</span>
		</Button>
	);
};

ReturnPreviousPage.propTypes = {
	onBackClick: PropTypes.func.isRequired,
};

export default localize( ReturnPreviousPage );
