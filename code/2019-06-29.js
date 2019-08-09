/**
 * Observer 패턴 예제
 *
 * 플레이어는 스파이를 통해 왕의 건강상태를 확인할 수 있습니다.
 * 스파이는 왕의 의사입니다.
 */
const Spy = (function() {
    function Spy() {
        // 스파이가 가진 정보
        this._partiesToNotify = []
    }

    Spy.prototype.Subscribe = function(subscriber) {
        // 구독
        this._partiesToNotify.push(subscriber)
    }

    Spy.prototype.Unsubscribe = function(subscriber) {
        // 해지
        this._partiesToNotify.remove(subscriber)
    }

    Spy.prototype.SetPainKillers = function(painKillers) {
        // s가 가진 정보 리스트
        for(let i = 0; i < this._partiesToNotify.length; i++) {
            this._partiesToNotify[i](painKillers)
        }
    }

    return Spy
})()


const Player = (function(){
    function Player() {

    }

    Player.prototype.OnKingPainKillerChange =
        function(newPainKillerAmount) {
            // p에게 알려줄 정보
            switch (newPainKillerAmount) {
                case 10:
                    console.log('왕이 감기에 걸렸다.')
                    break;
                case 12:
                    console.log('왕이 다쳤다.')
                    break;
                default:
                    console.log('왕은 건강하다.')
                    break;
            }
        }
    return Player
})()

const s = new Spy()
const p = new Player()

s.Subscribe(p.OnKingPainKillerChange) // 변경이 있으면 s가 p에게 알려주게끔 구독신청
s.SetPainKillers(10)
s.SetPainKillers(12)
s.SetPainKillers()

// [출처] https://medium.com/@shlee1353