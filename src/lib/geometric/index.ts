import { INormal, Normal } from '../normal';
import { dgeom  } from './dgeom';
import { pgeom  } from './pgeom';
import { qgeom } from './qgeom';
import { rgeom as _rgeom } from './rgeom';

export function Geometric(rng = Normal()){
    return {
      dgeom,
      pgeom,
      qgeom,
      rgeom:(N: number, prob: number) =>  _rgeom(N, prob, rng)
    };
}
