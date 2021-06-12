import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {createSerializer} from 'enzyme-to-json'

Enzyme.configure({ adapter: new Adapter() });
//Enzyme.configure({adapter:new adapter()});
expect.addSnapshotSerializer(createSerializer({mode:'deep'}));
