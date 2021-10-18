import React from 'react';
import './Global.css';
import { ProfileCard } from './ProfileCard';
import { SideNav } from './SideNav';

export class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			randomUser: null,
			previousUsers: [],
		};
		this.addAmigoToGroup = this.addAmigoToGroup.bind(this);
		this.fetchNextAmigo = this.fetchNextAmigo.bind(this);
		this.pushUnique = this.pushUnique.bind(this);
	}

	addAmigoToGroup(amigoSelected) {
		this.pushUnique(amigoSelected);
	}

	pushUnique(amigo) {
		const previousUsers = [...this.state.previousUsers];
		if (!previousUsers.length) {
			previousUsers.push(amigo);
		}
		if (previousUsers.find(user => user.email !== amigo.email)) {
			previousUsers.push(amigo);
		}
		this.setState({
			previousUsers,
		});
	}

	fetchNextAmigo() {
		fetch('https://randomuser.me/api')
			.then(res => res.json())
			.then(
				userData => {
					if (userData?.results) {
						const randomUser = userData?.results;
						this.pushUnique(randomUser[0]);
						this.setState({
							randomUser: randomUser[0],
						});
					}
				},
				error => {
					console.log('Error', error);
				}
			);
	}

	componentDidMount() {
		this.fetchNextAmigo();
	}

	render() {
		return (
			<div className='App'>
				<header className='App-header'>
					<div className='wrapper'>
						<div className='col-11 large-card'>
							<div className='col-12 medium-card'>
								<div className='col-2 side-nav-profile'>
									<SideNav />
								</div>
								<div className='col-10'>
									{this.state.randomUser ? (
										<ProfileCard
											userData={this.state.randomUser}
											addAmigoToGroup={
												this.addAmigoToGroup
											}
											fetchNextAmigo={this.fetchNextAmigo}
										/>
									) : null}
								</div>
							</div>
						</div>
					</div>
				</header>
			</div>
		);
	}
}

export default App;
