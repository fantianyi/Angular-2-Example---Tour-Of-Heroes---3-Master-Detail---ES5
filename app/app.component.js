(function(app) {
  const HEROES = [
    new app.Hero({id: 11, name: 'Mr. Nice'}),
    new app.Hero({id: 12, name: 'Narco'}),
    new app.Hero({id: 13, name: 'Bombasto'}),
    new app.Hero({id: 14, name: 'Celeritas'}),
    new app.Hero({id: 15, name: 'Magneta'}),
    new app.Hero({id: 16, name: 'RubberMan'}),
    new app.Hero({id: 17, name: 'Dynama'}),
    new app.Hero({id: 18, name: 'Dr IQ'}),
    new app.Hero({id: 19, name: 'Magma'}),
    new app.Hero({id: 20, name: 'Tornado'})
  ];

  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: `
        <h1>{{title}}</h1>
        <h2>My Heroes</h2>
        <ul class="heroes">
          <li *ngFor="let hero of heroes"
            [class.selected]="hero === selectedHero"
            (click)="onSelect(hero)">
            <span class="badge">{{hero.id}}</span> {{hero.name}}
          </li>
        </ul>
        <div *ngIf="selectedHero">
          <h2>{{selectedHero.name}} details!</h2>
          <div><label>id: </label>{{selectedHero.id}}</div>
          <div>
              <label>name: </label>
              <input [(ngModel)]="selectedHero.name" placeholder="name"/>
          </div>
        </div>
      `,
      styles: [`
        .selected {
          background-color: #CFD8DC !important;
          color: white;
        }
        .heroes {
          margin: 0 0 2em 0;
          list-style-type: none;
          padding: 0;
          width: 15em;
        }
        .heroes li {
          cursor: pointer;
          position: relative;
          left: 0;
          background-color: #EEE;
          margin: .5em;
          padding: .3em 0;
          height: 1.6em;
          border-radius: 4px;
        }
        .heroes li.selected:hover {
          background-color: #BBD8DC !important;
          color: white;
        }
        .heroes li:hover {
          color: #607D8B;
          background-color: #DDD;
          left: .1em;
        }
        .heroes .text {
          position: relative;
          top: -3px;
        }
        .heroes .badge {
          display: inline-block;
          font-size: small;
          color: white;
          padding: 0.8em 0.7em 0 0.7em;
          background-color: #607D8B;
          line-height: 1em;
          position: relative;
          left: -1px;
          top: -4px;
          height: 1.8em;
          margin-right: .8em;
          border-radius: 4px 0 0 4px;
        }
      `]
    })
    .Class({
      constructor: function() {
        this.title = 'Tour of Heroes';
        this.heroes = HEROES;
        this.selectedHero = null;
      },
      onSelect: function(hero){
        this.selectedHero = hero;
      }
    });
})(window.app || (window.app = {}));