import { Amadeusstudios.RoutingModule } from './amadeusstudios.routing.module';

describe('Amadeusstudios.RoutingModule', () => {
  let amadeusstudiosRoutingModule: Amadeusstudios.RoutingModule;

  beforeEach(() => {
    amadeusstudiosRoutingModule = new Amadeusstudios.RoutingModule();
  });

  it('should create an instance', () => {
    expect(amadeusstudiosRoutingModule).toBeTruthy();
  });
});
