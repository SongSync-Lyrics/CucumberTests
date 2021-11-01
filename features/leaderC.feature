Feature: As a leader, I would like to be the only leader of my room, so that only I can lead the session

  Scenario: I am a leader joining my room
    Given that I am a leader
    When I join my room
    Then ensure Im a leader
    And I "can lead" the session
    
  Scenario: I am a leader joining a different room
    Given that I am a leader
    When I join a different room
    Then ensure Im a follower
    And I "cannot lead" the session