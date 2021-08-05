import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import projects from './projects';
import price from './price';
import bhk from './bhk';
import project_image from './project_image';

export default createSchema({
	name: 'default',
	types: schemaTypes.concat([projects, price, bhk, project_image]),
});
