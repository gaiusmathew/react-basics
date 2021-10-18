import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPhone,
	faMobileAlt,
	faEnvelope,
	faThumbsUp,
	faThumbsDown,
	faForward,
} from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import React from 'react';
import './Global.css';
import './ProfileCard.css';

export class ProfileCard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='col-12'>
				<div className='profile-user-card'>
					<div className='col-2'>
						<img
							className='profile-image'
							alt='profileimage'
							src={this.props.userData.picture.large}
						/>
					</div>
				</div>
				<div className='col-8 profile-info'>
					<p className='short-bio'>
						<span className='card-heading'>
							{this.props.userData.name
								? `${this.props.userData.name.first} ${this.props.userData.name.last}`
								: ''}
						</span>
						<br />
						<b> username - {this.props.userData?.login.username} </b>
						<br />
						Joined on{' '}
						{moment(this.props.userData?.registered.date).format(
							'MM-DD-YY'
						)}
					</p>
				</div>
				<div className='col-3'>
					<button
						className='add-amigo-bt'
						onClick={() =>
							this.props.addAmigoToGroup(this.props.userData)
						}
					>
						<FontAwesomeIcon size='lg' icon={faThumbsUp} />
					</button>
					<button
						className='next-amigo-bt'
						onClick={() => this.props.fetchNextAmigo()}
					>
						<FontAwesomeIcon size='lg' icon={faForward} />
					</button>
				</div>

				<div className='col-12'>
					<div className='col-5 user-info-card'>
						<p>
							<span className='card-heading'>
								Contact Details
							</span>
							<br />
							<br />
							<FontAwesomeIcon size='lg' icon={faPhone} />
							{this.props.userData.phone}
							<br />
							<br />
							<FontAwesomeIcon size='lg' icon={faMobileAlt} />
							{this.props.userData.cell}
							<br />
							<br />
							<FontAwesomeIcon size='lg' icon={faEnvelope} />
							{this.props.userData.email}
						</p>
					</div>
					<div className='col-5 user-info-card'>
						<p>
							<span className='card-heading'> Location </span>
							<br />
							<br />
							City - {this.props.userData.location.city}
							<br />
							<br />
							State - {this.props.userData.location.state}
							<br />
							<br />
							Country - {this.props.userData.location.country}
						</p>
					</div>
				</div>
			</div>
		);
	}
}
