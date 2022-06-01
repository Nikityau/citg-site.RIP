import React from 'react';

import advantages from './Advantages.module.scss';

function Advantages() {
  return (
    <div className={advantages.container} data-testid="advantages-block-advantages">
      <div className={advantages.title}>
        <h3 data-mouse-focus>Преимущества</h3>
      </div>
      <div className={[advantages.text, advantages.textStyle].join(' ')}>
        <div className={[advantages.upperBlock].join(' ')}>
          <span data-mouse-focus>Здесь действия так же выжны, как и эмоции</span>
        </div>
        <div className={advantages.middleBlock}>
          <p data-mouse-focus>
            Под руководством специалистов, выступающих в качестве менторов, все заинтересованные
            ребята проходят самые разные курсы обучения. После этого Центр подключает их к текущим
            проектам или дает новые.
          </p>
        </div>
        <div className={advantages.bottomBlock}>
          <p data-mouse-focus>
            На текущий момент Центр IT-Притяжения предоставляет помощь в обучении по следующим
            специальностям:
          </p>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
