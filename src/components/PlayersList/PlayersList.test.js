import PlayersList from './PlayersList';
import React from 'react';
import { shallow } from 'enzyme';
import Player from '../Player/Player';

it('renders without crashing', () => {
    shallow(<PlayersList players={[]} />);
});

it('renders correct number of players', () => {
    
    const players = [
        {
            name: 'Kunegunda',
            score: 5
        },
        {
            name: 'Antoś',
            score: 0
        }
    ]
    const playerComponent = shallow(<PlayersList players={players} />);
    const expectedPlayersNumber = playerComponent.find('Player').length;
    expect(expectedPlayersNumber).toEqual(2);
});

it('renders update players list', () => {

    const players = [
        {
            name: 'Kunegunda',
            score: 5
        },
        {
            name: 'Antoś',
            score: 0
        }
    ]

    const mockedOnScoreUpdate = jest.fn();
    const playerComponent = shallow(<PlayersList players={players} onScoreUpdate={mockedOnScoreUpdate} />);
    const firstPlayer = playerComponent.find(Player).first();
    const onPlayerScoreChange = firstPlayer.prop('onPlayerScoreChange');
    onPlayerScoreChange(10);
    expect(mockedOnScoreUpdate).toBeCalledWith(0, 10);

})


it('renders remove player from list', () => {

    const players = [
        {
            name: 'Kunegunda',
            score: 5
        },
        {
            name: 'Antoś',
            score: 0
        }
    ]

    const mockedOnPlayersListUpdate = jest.fn();
    const playerComponent = shallow(<PlayersList players={players} onPlayersListUpdate={mockedOnPlayersListUpdate} />);
    const removerPlayer = playerComponent.find(Player).name();
    const onPlayerRemove = removerPlayer.prop('onPlayerRemove');
    onPlayerRemove(
        players = [
                {
                    name: 'Kunegunda',
                    score: 5
                },
            ]
    );
    expect(mockedOnPlayersListUpdate).toBeCalledWith(
        players = [
            {
                name: 'Kunegunda',
                score: 5
            },
        ]
    );

})

