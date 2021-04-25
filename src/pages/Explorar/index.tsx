import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import exploreTypes from '../../utils/explorerTypes';

import { Container } from './styles';

interface ExplorarTypeProps {
	type: string
}

const Explorar: React.FC = () => {
	const {type} = useParams<ExplorarTypeProps>()

	if (!(type in exploreTypes)) return <Redirect to="/notFound"/>

  return <div>
		achou
	</div>

}

export default Explorar;