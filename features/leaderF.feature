Feature: As a user, I would like to view lyrics, so that I can sing-a-long

  Scenario: I join a session
    Given I am a user
    When I "join" a session
    Then the lyrics are "displayed"

Scenario: I fail to join a session
    Given I am a user
    When I "fail to join" a session
    Then the lyrics are "not displayed"