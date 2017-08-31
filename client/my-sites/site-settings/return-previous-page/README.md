Return Previous Page

This component is used to display a `Back` button used for redirecting
to the previously visited site.

#Usage:

``js
import ReturnPreviousPage from 'my-sites/site-settings/return-previous-page';
...

handleClick() => {
...
}

<span className="....">
		<ReturnPreviousPage onClick={ this.handleClick } { ...this.props } />
</span>

#Props:

- `handleClick()` function to handle the `onClick` event, which return .
